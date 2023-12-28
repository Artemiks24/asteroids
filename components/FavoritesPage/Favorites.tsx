import React, { FC, useEffect } from "react";
import styles from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
import type { RootState } from "../../redux/store";
import { IpostProps } from "../../helper/types";
import { formatDate } from "../../helper/formatDate";
import { Gradient } from "../../consts";
import { Button } from "@mui/material";
import { deleteFavorites, addFavorites } from "../../redux/features/posts/postsSlice";
import { setUser } from "../../redux/features/users/usersSlices";

const Favorites: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem('favorites');
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      dispatch(setUser(parsedData));
    }
    if (favoritesFromStorage) {
      const favoritesArray = JSON.parse(favoritesFromStorage);
      favoritesArray.forEach((item: IpostProps) => {
        dispatch(addFavorites(item));
      });
    }
  }, [dispatch]);


  const Auth = useSelector((state: RootState) => state.users.isAuth);
  const favoritePosts = useSelector(
    (state: RootState) => state.posts.favoritePosts
  );

  const handleRemoveButtonClick = (p: IpostProps) => {
    const favoritesFromStorage = localStorage.getItem('favorites');
    let favoritesArray = [];

    if (favoritesFromStorage) {
      favoritesArray = JSON.parse(favoritesFromStorage);
    }
    favoritesArray = favoritesArray.filter((item: IpostProps) => item.id !== p.id);
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
    dispatch(deleteFavorites(p));
  };

  return (
    <>
      {Auth ? (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Favorites</h2>
          <div className={styles.favoriteList}>
            {Object.values(favoritePosts).map((post: IpostProps) => (
              <div key={post.id} className={styles.postContainer}>
                <h3 className={styles.postTitle}>{post.name}</h3>
                <div className={styles.section}>
                  <p>{`${Number(post.kilometers).toFixed(0)} kilometers`}</p>
                  <p>{`${Number(post.lunar).toFixed(0)} lunar distance`}</p>
                </div>
                <div className={styles.section}>
                  <p>{`Ø ${post.diameter.toFixed(0)} m`}</p>
                  <p>{formatDate(post.date)}</p>
                </div>
                <div className={styles.section}>
                  <Button onClick={() => handleRemoveButtonClick(post)} style={{ background: Gradient.basketButton }} variant="contained">
                    Un-cart
                  </Button>
                  <p>{post.danger ? '⚠ Danger' : 'Safe'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Favorites;

// const router = useRouter();

// useEffect(() => {
//   if (!Auth) {
//     router.push("/signup");
//   }
//   else {
//     router.push("/favorites");
//   }
// }, [Auth, router]);
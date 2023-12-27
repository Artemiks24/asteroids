import React, { FC } from "react";
import styles from "./Favorites.module.css";

import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

import type { RootState } from "../../redux/store";
import { IpostProps } from "../../helper/types";
import { formatDate } from "../../helper/formatDate";
import { Gradient } from "../../consts";
import { Button } from "@mui/material";
import { unCart } from "../../redux/features/posts/postsSlice";
const Favorites: FC = () => {

  const Auth = useSelector((state: RootState) => state.users.isAuth);
  const favoritePosts = useSelector(
    (state: RootState) => state.posts.favoritePosts
  );

  const dispatch = useDispatch();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!Auth) {
  //     router.push("/signup");
  //   }
  //   else {
  //     router.push("/favorites");
  //   }
  // }, [Auth, router]);

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
                  <Button onClick={() => dispatch(unCart(post.id))} style={{ background: Gradient.basketButton }} variant="contained">
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

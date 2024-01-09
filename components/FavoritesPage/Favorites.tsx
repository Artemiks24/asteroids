import React, { FC, useEffect } from "react";
import styles from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
import type { RootState } from "../../redux/store";
import { IpostProps } from "../../helper/types";
import { formatDate } from "../../helper/formatDate";
import { Gradient } from "../../consts";
import { Button } from "@mui/material";
import { deleteFavorites, addFavorites, setLoading } from "../../redux/features/posts/postsSlice";
import { setUser } from "../../redux/features/users/usersSlices";
import { getDatabase, ref, remove, get } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase';
import Loader from "../Loader/Loader";



const Favorites: FC = () => {

  const dispatch = useDispatch();
  const Auth = useSelector((state: RootState) => state.users.isAuth);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const favoritePosts = useSelector(
    (state: RootState) => state.posts.favoritePosts
  );
  const auth = getAuth(app);
  auth.onAuthStateChanged(() => { });

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      dispatch(setUser(parsedData));
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;

      if (!user) {
        return new Promise((resolve,) => {
          const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
              unsubscribe();
              resolve(user);
            }
          });
        });
      }

      return user;
    };


    fetchData().then((user) => {
      const database = getDatabase();
      const userId = user.uid;
      const userPostsRef = ref(database, `userPosts/${userId}`);
      get(userPostsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const fetchedData: IpostProps[] = [];
            snapshot.forEach((childSnapshot) => {
              fetchedData.push(childSnapshot.val());
            });
            fetchedData.forEach((post) => {
              dispatch(addFavorites(post));
            });
          }
          dispatch(setLoading(false));
        })
        .catch((error) => {
          dispatch(setLoading(false));
          console.error('Error fetching data:', error);
        });
    });
  }, [auth.currentUser, auth, dispatch]);


  const handleRemoveButtonClick = (p: IpostProps) => {
    const user = auth.currentUser;

    if (user) {
      const database = getDatabase();
      const userId = user.uid;
      const userPostsRef = ref(database, `userPosts/${userId}`);
      get(userPostsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              const postId = childSnapshot.val().id;
              if (postId === p.id) {
                const postIdToRemove = childSnapshot.key;
                const userPostRefToRemove = ref(database, `userPosts/${userId}/${postIdToRemove}`);
                remove(userPostRefToRemove)
                  .then(() => {
                    dispatch(deleteFavorites(p));
                  });
              }
            });
          }
        })
        .catch((error) => {
          console.error('Ошибка получения данных:', error);
        });
    }
  };

  if (loading) {
    return <Loader />;
  }

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
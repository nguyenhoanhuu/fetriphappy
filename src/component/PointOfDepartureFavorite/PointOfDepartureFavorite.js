import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '~/component/PointOfDepartureFavorite/PointOfDepartureFavorite.module.scss';
import PointOfDepartureFavoriteItem from './PointOfDepartureFavoriteItem/PointOfDepartureFavoriteItem';
import { Carousel } from 'antd';
import * as GetTour from '~/service/GetTour';

const cx = classNames.bind(styles);

function PointOfDepartureFavorite() {
  const [listDeparture, setListDeparture] = useState([]);

  const showListPoint = (listDeparture) => {
    return listDeparture.map((item, index) => {
      return <PointOfDepartureFavoriteItem key={index} data={item} />;
    });
  };

  useEffect(() => {
    GetTour.search('tours/top8', 'favoritedestination')
      .then((data) => {
        if (Array.isArray(data)) {
          setListDeparture(data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>Điểm đến yêu thích</h2>
      {typeof window !== 'undefined' && window.innerWidth <= 680 ? (
        <Carousel>{showListPoint(listDeparture)}</Carousel>
      ) : (
        <div className={cx('list-item')}>{showListPoint(listDeparture)}</div>
      )}
    </div>
  );
}

export default PointOfDepartureFavorite;

import { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { getImages } from 'helpers/PixabayAPI';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);

  const fetchImages = useCallback(async (query, page) => {
    try {
      setIsLoading(true);
      const response = await getImages(query, page);
      if (response.data.total === 0) {
        return toast.error('Nothing found for your request');
      }
      if (page === 1) {
        toast.info(`Hooray. We found ${response.data.totalHits} images`);
        const totalPages = response.data.totalHits / response.data.hits.length;
        if (totalPages > 1) {
          setIsLoadMore(true);
        }
        setTotalImages(response.data.totalHits);
      }
      setImages(images => [...images, ...response.data.hits]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (query !== '') {
      fetchImages(query, page);
    }
  }, [query, page, fetchImages]);

  useEffect(() => {
    if (images.length !== 0) {
      if (images.length >= totalImages) {
        setIsLoadMore(false);
        toast.info('You viewed all pictures');
      }
    }
  }, [images.length, totalImages]);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  const saveQuery = newQuery => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setIsLoadMore(false);
    setPage(1);
    setError(null);
  };

  const toggleModal = e => {
    if (!showModal) {
      setModalImage(e.target.dataset.source);
    }
    setShowModal(showModal => !showModal);
  };

  return (
    <div className="container">
      <Searchbar onGetImages={saveQuery} />
      <ImageGallery images={images} openModal={toggleModal} />
      {error && toast.error(`${error.message}`)}
      {isLoading && <Loader />}
      {!isLoading && isLoadMore && <Button onButtonClick={loadMore} />}
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <img src={modalImage} alt="large" />
        </Modal>
      )}
      <ToastContainer autoClose={4000} />
    </div>
  );
};

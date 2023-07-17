import { useState } from 'react';

export const useModal = (modalRef) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        setIsModalOpen(false);
    };

    const handleOutsideClick = (modalRef, e) => {
        if (modalRef.current && modalRef.current === e.target) {
            closeModal();
        }
    };

    const handleImageClick = (index) => {
        openModal(index);
        setIsModalOpen(true);
    };

    return {
        selectedImageIndex,
        setSelectedImageIndex,
        isModalOpen,
        setIsModalOpen,
        openModal,
        closeModal,
        handleOutsideClick,
        handleImageClick,
    };
};

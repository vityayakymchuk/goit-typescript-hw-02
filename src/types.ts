export interface Image {
  id: string,
  alt_description: string,
  description: string
  urls: {
    regular: string,
    small: string
  }
};

export interface ImageInfo {
  alt: string,
  url: string
};

export interface LoaderProps {
  isLoading: boolean
};

export interface ImageCardProps {
	urlSmall: string;
	urlReg: string;
	alt: string;
	openModal: (alt: string,urlReg: string) => void
};

export interface ImageGalleryProps {
	allImages: Image[],
	openModal: (alt: string,urlReg: string) => void
};

export interface ImageModalProps {
    isModalOpen: boolean,
    closeModal: () => void,
    imageInfo: ImageInfo
};

export interface LoadMoreBtnProps { onClick: () => void };

export interface SearchBarProps { onSubmit: (topic: string) => void };
import { useState } from 'react'
import styles from  './styles.module.css'
import closeImg from '../../../../assets/close-img.png'
import { FixedContainer } from '../../../../components/FixedContainer/fixedContainer'

export const ImageModal = ({ imageUrl }: { imageUrl: string }) => {

    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

  return (
    <>
      <img src={imageUrl} className={styles.img} onClick={openModal}/>
      {isOpen && (
        <FixedContainer clickContainer={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img src={closeImg} className={styles.closeImage} onClick={closeModal}/>
            <img src={imageUrl} className={styles.modalImage}/>
          </div>
        </FixedContainer>
      )}
    </>
  )
}

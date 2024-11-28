import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Formwhats from '../form/form-whats';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

const Popupform = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
    setTimeout(() => {
			handleOpen();
		}, 5000);
  }, []);

	return (
		<div>
			  <Modal
        open={open}
        onClose={handleClose}
			>
				<div className='popup__content'>
					<CloseIcon
						className='popup__close'
						onClick={handleClose}
					/>
					<Formwhats />
					<div className='popup__img'>
						<Image className="popup-imagen" src="https://tierralinda.movemospruebas.com/tierralinda/wp-content/uploads/2023/06/COMERCIO-RENDER-02.jpg"
						alt={'Asesora Nido'}
						width={800}
						height={400}
						/>
					</div>
				</div>
			</Modal>
		</div>
	)

};

export default Popupform;

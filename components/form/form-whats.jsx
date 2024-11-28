import Image from "next/image"
import { useState, useEffect } from "react";

export default function Formwhats() {
	
	const nameClass = 'c-form-whats'
	const nameClassFloat = "c-float"

	const[addSticky, setAddSticky] = useState('')
	
	useEffect(() => {
		const targetElement = document.querySelector(".content-detect");
		
    if (targetElement) {
			
			window.addEventListener("scroll", () => {
				const { top } = targetElement.getBoundingClientRect();

				if(top < 0){ setAddSticky(nameClassFloat + '--sticky') }
				if(top > 0){ setAddSticky('')  }

			})
		}

  }, []);
	
	return (
		<>
			<div className={`${nameClassFloat} ${addSticky}`} >
				<div className={nameClass + '__asesora'}>
					<Image src="https://tierralinda.movemospruebas.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-27-at-11.49.06.jpeg"
						alt={'Asesora Nido'}
						width={500}
						height={500}
					/>
					<div className={nameClass + '__asesora-content'}>
						<h3 className={nameClass + '__asesora-name'}>Mariana Gómez</h3>
						<p className={nameClass + '__title'}>En línea</p>
					</div>
				</div>
				<div className={ nameClass }>
					<div className={nameClass + '__text'}>
						<h3 className={nameClass + '__sub-title'}>
            Contáctanos para iniciar una conversación, conocer más del proyecto o agendar una visita
						</h3>
					</div>
					<div className={nameClass + '__form'}>
						<form className={nameClass + '__form-content'}>
							<div className={`${nameClass}__item`}>
								<input
									type="text"
									id="nombre"
									name="nombre"
									placeholder="Nombre"
									className={`${nameClass}__input`} />
							</div>
							<div className={`${nameClass}__item`}>
								<input
									type="text"
									id="celular"
									name="celular"
									placeholder="Celular"
									className={`${nameClass}__input`} />
							</div>
							<div className={`${nameClass}__item`}>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									className={`${nameClass}__input`} />
							</div>
							<div className={`${nameClass}__item`}>
								<input
									type="text"
									id="ciudad"
									name="ciudad"
									placeholder="Ciudad"
									className={`${nameClass}__input`} />
							</div>
							<div className={`${nameClass}__item`}>
								<input
									type="checkbox"
									id="acepto"
									name="acepto"
									className={`${nameClass}__checkbox`} />
								<label
									htmlFor="acepto"
									className={`${nameClass}__label`}>Acepto políticas de tratamiento de datos</label>
							</div>
							<button
								onClick={handleFormSubmit}
								type="submit"
								className={`${nameClass}__button`}>Iniciar conversación</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}


const handleFormSubmit = async (event) => {
	event.preventDefault();

	const formClicked = event.currentTarget.parentNode;

  const username = "apiUserProhogar";
	const password = "EhPxkgZPbji8";
	const encodedCredentials = btoa(`${username}:${password}`);

	const name = formClicked.querySelector("#nombre").value;
	const phone = formClicked.querySelector("#celular").value;
	const email = formClicked.querySelector("#email").value;
	const city = formClicked.querySelector("#ciudad").value;
	// const presupuesto = formClicked.querySelector("#presupuesto").value;
	const acepto = formClicked.querySelector("#acepto").value;

  const origin = "landing Tierrra Linda";
	const medio = "landing Tierrra Linda";

	const response = await fetch(
		"https://www.sico.com.co/SicoApi/api/Mercadeo/LeadAddSICO",
		{
			method: "post",
			headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${encodedCredentials}`,
			},
			body: JSON.stringify({
				strToken: "2CF124F2921041FB8AFF6573440889B4",
				email: email,
				name: name,
				origin: origin,
				medio: medio,
				phone: phone,
				city: city,
				acepto:acepto,
			}),
		}
	);

  const result = await response.json();
  if(result.Result == 'OK') location.href = "https://api.whatsapp.com/send/?phone=%2B573115986040&text&type=phone_number&app_absent=0"	
};


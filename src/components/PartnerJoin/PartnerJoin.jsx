import ButtonRed from '../ButtonRed/ButtonRed';
import InputBase from '../InputBase/InputBase';
import './PartnerJoin.scss'

function PartnerJoin() {

	const submitHandler = (ev) => {
		ev.preventDefault()
		console.log('PartnerJoin submitHandler');
	}

    return (
        <form className="partner-join-form">
			<InputBase id='userName' placeholder='Имя' type='text' name='userName' />
			<InputBase id='userNumber' placeholder='Номер телефона' type='text' name='userNumber' />
			<InputBase id='userMail' placeholder='Электронная почта' type='email' name='userMail' />
			<InputBase id='userInsta' placeholder='Ваш инстаграм' type='text' name='userInsta' />
            <ButtonRed type='submit' txt='Отправить' onClick={submitHandler} />
        </form>
    );
}

export default PartnerJoin;

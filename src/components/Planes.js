
export default function Planes(props){
	return(
		<div>
    <h2>{props.nameBrief}</h2>
    <img src={props.urlMain} alt={props.urlMain} width="400" />
    <p>Повна назва: {props.nameFull}</p>
    <p>Тип: {props.type}</p>
    <p>Прізвисько: {props.nickname}</p>
    <p>Країна виробник: {props.country}</p>
    <p>Рік випуску: {props.year}</p>
    <p>Ціна: {props.price}</p>
    <p>Опис: {props.description}</p>
    <p>Рекламна модель:</p>
    <img src={props.urlPromotional} alt="Рекламна модель" width="300" />
    <p>Реальна модель:</p>
    <img src={props.urlActual} alt="Реальна модель" width="600" />
    <br />
    <button type="button">Додати до кошику</button>
		</div> 
	)
}
{/* <div>
    <h2></h2>
    <img src= alt= width="400" />
    <p>Повна назва: </p>
    <p>Тип: </p>
    <p>Прізвисько: </p>
    <p>Країна виробник: </p>
    <p>Рік випуску: </p>
    <p>Ціна: </p>
    <p>Опис: </p>
    <p>Рекламна модель:</p>
    <img src= alt=width="300" />
    <p>Реальна модель:</p>
    <img src= alt= width="600" />
    <br />
    <button type="button">Додати до кошику</button>
</div> */}

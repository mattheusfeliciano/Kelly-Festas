import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../../hooks/useFoodDataMutate';
import { FoodData } from '../../../interface/FoodData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title, 
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2> Eventos - Cadastre uma nova decoração</h2>
                <form className="input-container">
                    <Input label="Nome" value={title} updateValue={setTitle}/>
                    <Input label="Custo" value={price} updateValue={setPrice}/>
                    <Input label="Link da Imagem" value={image} updateValue={setImage}/>
                </form>
                <div className="modal-actions">
                    <button onClick={submit} className="btn-secondary">
                        {isLoading ? 'postando...' : 'Confirmar'}
                    </button>
                    <button onClick={closeModal} className="btn-cancel">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

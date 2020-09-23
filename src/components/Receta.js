import React, { useContext, useState } from "react";
import { ModalContext } from '../context/ModalContext'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 350,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {


  // Configuracion ventana Modal
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const handlerOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const { informacionReceta, guardarIdReceta, guardarReceta } = useContext( ModalContext )

  const mostrarIngredientes = informacionReceta =>{
    let ingredientes = [];
    for(let i = 1; i < 16; i++){
      if (informacionReceta[`strIngredient${i}`]){ 
        ingredientes.push(
          <i>{informacionReceta[`strIngredient${i}`]} 
          {informacionReceta[`strMeasure${i}`]}</i>
        )
      }
    }
    return ingredientes
  }
  return (
    <div className="col-md-4">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img className="card-img-top" src={receta.strDrinkThumb} alt={`imagen de ${receta.strDrink}`} 
        />
        <div className="card-body">
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={() => {
                  guardarIdReceta(receta.idDrink)
                  handlerOpen()
                }}
            >
                Ver Recetas Copete
            </button>

            <Modal
              open={open}
              onClose={()=>{
                guardarIdReceta(null)
                guardarReceta({})
                handleClose()
              }}
            >
              <div style={modalStyle} className={classes.paper}>
                <h2>{informacionReceta.strDrink}</h2>
                <img src={informacionReceta.strDrinkThumb} className="img-fluid my-4" alt=""/>
                <h3 className="mt-4">Instruccion de preparacion</h3>
                <p>
                  {informacionReceta.strInstructions}
                </p>
                
                <h3>Ingredientes y cantidades</h3>
                <ul>
                { mostrarIngredientes(informacionReceta) }
                </ul>
              </div>
            </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;

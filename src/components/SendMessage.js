import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Button, TextField, styled } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useParams } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroById';


const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "#7ed957",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#7ed957",
      fontSize: "0.9em",
    },
    borderRadius: '10px'
  },
}));

const textFieldInputLabelStyle = {
  fontSize: "0.9em",
  alignSelf: "center",
  justifySelf: "center",
};

const textFieldStyle = {
  width: "230px",
};




const SendMessages = ({ history, props }) => {
  const CHARACTER_LIMIT = 100;
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    descripcion,
    descripcion2,
    descripcion3,
    descripcion4
  } = hero;
  localStorage.setItem('precioUnitario', first_appearance);
  const amount = localStorage.getItem('cantidad');
  const finalPrice = localStorage.getItem('precioUnitario');
  const toPay = amount * finalPrice
  const [formData, setFormData] = useState({
    mobileNumber: '+573167553635',
    message: `Precio unitario: ${first_appearance} \nPeso:${descripcion}`,
  });
  const saludo= `Gracias por tu compra en Platanera2R\n Este es tu pedido del producto seleccionado`

  const { mobileNumber, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {

      // TODO: Enter code here

      // Regex expression to remove all characters which are NOT alphanumeric 
      let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

      // Appending the phone number to the URL
      let url = `https://web.whatsapp.com/send?phone=${number}`;

      // Appending the message to the URL by encoding it
      url += `&text=${encodeURI(saludo+'\n'+message+`\nCantidad:${amount}\nPrecio total: ${toPay}`)}&app_absent=0`;
      // Open our newly created URL in a new tab to send the message
      window.open(url);
    }
  };
  return (
    <div className='communication'>
      <div className='whatsapp-card app'>
        <div className='title flex_middle'>
          <div style={{ marginRight: "0.5em" }}>
            <WhatsAppIcon />
          </div>
          <div>Send Message</div>
        </div>
        {numberEmptyError && (
          <div className='errors'>Mobile number cannot be empty!</div>
        )}
        {messageEmptyError && (
          <div className='errors'>Message cannot be empty!</div>
        )}
        {!numberEmptyError && !messageEmptyError && (
          <div className='errors-null'>.</div>
        )}
        <div className='search_contact app'>
          <CssTextField
            error={numberEmptyError}
            label='Mobile Number'
            placeholder='Mobile Number'
            name='mobileNumber'
            value={mobileNumber}
            onChange={onChange}
            size='small'
            disabled
            style={{
              margin: "1em 0em",
            }}
            inputProps={{
              style: textFieldStyle,
            }}
            InputLabelProps={{
              style: textFieldInputLabelStyle,
            }}
          />
        </div>
        <div className='message app' style={{ marginTop: "1.5em" }}>
          <CssTextField
            multiline
            maxRows={4}
            label='Message'
            placeholder='Hi! Sending a message from React....'
            size='small'
            InputLabelProps={{
              style: textFieldInputLabelStyle,
            }}
            inputProps={{
              style: {
                width: "230px",
                height: "90px",
              },
              maxLength: CHARACTER_LIMIT,
            }}
            FormHelperTextProps={{
              style: {
                margin: 0,
                padding: "0 0 0 5px",
                fontSize: 10,
              },
            }}
            name='message'
            value={message}
            onChange={onChange}
            error={message.length > CHARACTER_LIMIT - 1 || messageEmptyError}
            helperText={
              !(message.length > CHARACTER_LIMIT - 1)
                ? `${message.length}/${CHARACTER_LIMIT}`
                : "Max length exceeded"
            }
          />
        </div>
        <div style={{ marginTop: "1.5em", marginLeft: "4.5em" }}>
          <Button
            onClick={onSubmit}
            variant='outlined'
            color='success'
            size='small'
          >
            Send
          </Button>
          {/* <ReactWhatsapp
            number={mobileNumber}
            message={message+`\nCantidad:${amount}\nPrecio total: ${toPay}`}
          >
            Envíar pedido
          </ReactWhatsapp> */}
        </div>
      </div>
    </div>
  );
};

SendMessages.propTypes = {
  number: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default SendMessages;

import Input from "./formikElements/Input";



const FormikControl = (props) => {
  const {control, ...rest} =props
    
    switch (control) {
      case 'input':
        return <Input {...rest}/>
        
    
      default:
        break;
    }
    
};

export default FormikControl;
import { useRef, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setcpass] = useState("");
  const [erreur, setErreur] = useState("* Tous les champs sont obligatoires !");
  const [success, setSuccess] = useState("");
  const [afficherInfos, setAfficherInfos] = useState(false);
  const nomRef = useRef(null);
  const emailRef = useRef(null);
  const telRef = useRef(null);
  const PassRef = useRef(null);
  const CPassRef = useRef(null);

  const handleSubmit = () => {
    // Vérifier si tous les champs sont remplis
    if (!nom || !email || !tel || !pass || !cpass) {
      setErreur("Veuillez remplir tous les champs !");
      
      if (!nom){
        nomRef.current && nomRef.current.focus();
        return;
      }
      if (!email){
        emailRef.current && emailRef.current.focus();
        return;
      }
      if (!tel){
        telRef.current && telRef.current.focus();
        return;
      }
      if (!pass){
        PassRef.current && PassRef.current.focus();
        return;
      }
      if (!CPassRef){
        CPassRef.current && CPassRef.current.focus();
        return;
      }
    }

    // Vérifier le nom (lettres uniquement)
    if (!/^[A-Za-zÀ-ÿ\s'-]+$/.test(nom)) {
      setErreur("Nom invalide");
      nomRef.current && nomRef.current.focus();
      return;
    }

    // Vérifier l'email 
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErreur("Adresse email invalide !");
      emailRef.current && emailRef.current.focus();
      return;
    }

    // verifier le telephone 
    if (!/^[0-9]+$/.test(tel) || tel.length != 10){
      setErreur("Numéro de téléphone invalide !");
      telRef.current && telRef.current.focus();
      return;
    }

    // Vérifier la correspondance des mots de passe
    if (pass !== cpass) {
      setErreur("Les mots de passe ne correspondent pas !");
      CPassRef.current && CPassRef.current.focus();
      return;
    }

    // verification du mot de passe 
    if (pass.length < 8 ){
      setErreur("Le mot de passe doit contenir au moins 8 caractères !");
      PassRef.current && PassRef.current.focus();
      return;
    }

    if (!/[#/@!~$^&*()_+\s\-]+/gi.test(pass)){
      setErreur("Veuillez renforcer votre mot de passe en \najoutant des caractères spéciaux(@, #, /, %) !");
      PassRef.current && PassRef.current.focus();
      return;
    }

    setAfficherInfos(true);
    setErreur("");
    setSuccess("Envoi du formulaire ...");
  };

  return (
    <>
     <div className='d-flex justify-content-center vh-100'>
      <div>
        <h3>Entrer vos informations.</h3>
        { erreur ? 
          <p className='text-danger text-center'>{ erreur }</p> :
           <p className='text-success text-center'>{ success }</p> 
        }
        <form action="" method="post" className='shadow p-3'>

          <label htmlFor="Nom" className='form-label'>Nom <span className='text-danger'>*</span></label>
          <input type="text" name="Nom" id="Nom" className='form-control' value={nom} onChange={(e)=>{
            setNom(e.target.value);
            setErreur("");
            }} 
            ref={nomRef}
          />

          <label htmlFor="Email" className='form-label'>Adresse e-mail <span className='text-danger'>*</span></label>
          <input type="email" name="Email" id="Email" className='form-control' value={email} onChange={(e)=>{
            setEmail(e.target.value);
            setErreur("");
            }}
            ref={ emailRef } 
          />

          <label htmlFor="Tel" className='form-label'>Tél <span className='text-danger'>*</span></label>
          <input type="tel" name="Tel" id="Tel" className='form-control' value={tel} onChange={(e)=> {
            setTel(e.target.value);
            setErreur("");
            }}
            ref={ telRef } 
          />

          <label htmlFor="Pass" className='form-label'>Mot de passe <span className='text-danger'>*</span></label>
          <input type="password" name="Pass" id="Pass" className='form-control' value={pass} onChange={(e) => {
            setPass(e.target.value);
            setErreur("");
            }}
            ref={ PassRef } 
          />

          <label htmlFor="CPass" className='form-label'>Confirmer mot de passe <span className='text-danger'>*</span></label>
          <input type="password" name="CPass" id="CPass" className='form-control' value={cpass} onChange={(e) => {
            setcpass(e.target.value);
            setErreur("");
            }}
            ref={ CPassRef } 
          />
        
          <input type="button" value="Valider" className='btn btn-success mt-3' onClick={handleSubmit} />
        </form>

        {/* affichage des informations saisies par l'utilisateur */}
        {afficherInfos &&
          <div > 
            <h3>Vos informations:</h3>
            <p>Nom: { nom }</p>
            <p>Adresse E-mail: { email } </p>
            <p>Numéro de téléphone: { tel } </p>
            <p>Mot de passe: { pass } </p>
        </div>
        }
      </div>
    </div>
    </>
  )
}

export default App;
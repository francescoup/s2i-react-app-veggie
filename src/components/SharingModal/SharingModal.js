import { AiOutlineCloseCircle} from 'react-icons/ai';
import { Modal, Wrapper } from './style.js';


const SharingModal = ({handleModal, recipeUrl, handleClose}) => {

  return <>
    <section className='container'>

      <Modal>

        <Wrapper className={`${handleModal ? 'open':'closed'}`}>
          <div className='modal-container'>
            <button onClick={()=>handleClose(false)}><AiOutlineCloseCircle/></button>
            <h3>Ops, your browser doesn't support this function, copy the follow link and share it where you want.</h3>
            <div className='sharing-link'>
              <h4>{recipeUrl}</h4>
            </div>
          </div>
        </Wrapper>

      </Modal>

    </section>
  </>
}


export default SharingModal

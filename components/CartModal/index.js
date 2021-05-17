import { Modal, Row, Col, Form, Button } from 'react-bootstrap'
import Link from 'next/link'
import Cart from "../Cart"

import { useRecoilState } from 'recoil'
import cartState from '../../store/atoms/cartAtom'

export default function CartModal(props) {
  const [cart] = useRecoilState(cartState)

  return(
    <Modal
      show={props.show}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'
      keybord={false}
      onHide={() => props.onHide()}
    >
      <Modal.Header>
        <h5 className='fw-bold mt-2'>Carinho</h5>
        <h5 className='clickable_effect' onClick={() => props.onHide()}>X</h5>
      </Modal.Header>
      <Modal.Body>
        <Cart show={props.show} />
        {
          cart.products.length > 0 && 
          <div className='text-center pt-2'>
            <Link href='/orders/new'>
              <Button variant='custom-red' className='text-white' onClick={() => props.onHide()}>
                Finalizar Pedido
              </Button>
            </Link>
          </div>
        }
      </Modal.Body>
    </Modal>
  )
}
import Details from './Details'
import CategoryProducts from './CategoryProducts'
import getRestaurant from '../../services/getRestaurant'
import { useRouter } from 'next/router'
import { Spinner, Alert } from 'react-bootstrap'

export default function DetailsRestaurant(props) {
  const restaurant = props.restaurant
  //const router = useRouter()
  //const { id } = router.query

  //const { restaurant, isLoading, isError } = getRestaurant(id)

  //if(props.isError) 
    //return <Alert variant='custom-red'>Erro ao carregar</Alert>
  //else if(isLoading)
    //return <Spinner animation='border'/>

  return (
    <>
      <Details {...restaurant} />
      { 
        restaurant.product_categories && restaurant.product_categories.map((product_category, i) => <CategoryProducts restaurant={restaurant} {...product_category} key={i}/>)
      }
    </>
  )
}

//SSR
/* export default function DetailsRestaurant(props) {
  const restaurant = props.restaurant
  
  if(props.isError) 
    return <Alert variant='custom-red'>Erro ao carregar</Alert>

  return (
    <>
      <Details {...restaurant} />
      { 
        restaurant.product_categories && restaurant.product_categories.map((product_category, i) => <CategoryProducts restaurant={restaurant} {...product_category} key={i}/>)
      }
    </>
  )
} */
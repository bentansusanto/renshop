import CategoryPage from '../../components/Products/CategoryPage'
import Layouts from '../../layouts/index'
import { useRouter } from 'next/router';
    

const Category = () => {
  const router = useRouter();
  const {id} = router.query 

  return (
    <div>
      <Layouts>
        <CategoryPage categoryId={id as string}/>
      </Layouts>
    </div>
  )
}

export default Category

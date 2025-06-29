import axios from '../../api/AxiosConfig'
import { loadproduct } from '../productSlice';
// import { loadProduct } from '../productSlice';

//  Load all products
export const loadProducts = () => async (dispatch)=>{
    try {
        let {data} = await axios.get('/products');
        dispatch(loadproduct(data));
        
    } catch (error) {
        console.log(error);
    }
}

//  Create a product and reload products list
export const createProduct = (product) => async (dispatch) => {
    try {
        await axios.post('/products', product);
        dispatch(loadProducts());
    } catch (error) {
        console.log(error);    
    }
    
}

//  update product and reload products list
export const updateProduct = (id, product) => async (dispatch) => {
    try {
        await axios.patch('/products/'+ id, product);
        dispatch(loadProducts());
    } catch (error) {
        console.log(error);    
    }
    
}

//  delete product and reload products list
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await axios.delete('/products/' + id);
        dispatch(loadProducts());
    } catch (error) {
        console.log(error);    
    }
    
}
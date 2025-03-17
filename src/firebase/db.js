import { app } from "./config";
import { getFirestore,collection, getDocs, query } from "firebase/firestore";


const db = getFirestore(app);


export const getProductos = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const productos = []

    querySnapshot.forEach((doc) => {
        productos.push({...doc.data(),id: doc.id})
    })
    return productos;
}

export const getProductosByCategory = async (category) => {
    const q = query(collection(db, "productos"), where("category", "==", category))
    const querySnapshot = await getDocs(q);
    const productos = []

    querySnapshot.forEach((doc) => {
        productos.push({...doc.data(),id: doc.id})
    })
    return productos
}

export const getProducto = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {...docSnap.data(), id: docSnap.id}
    } else {
        console.log("No such document!");
    }
}
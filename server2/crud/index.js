const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyCUHHI4BWuKasuwwNyxGslgQlZBOPmhNE8",
    authDomain: "prova-docker.firebaseapp.com",
    projectId: "prova-docker",
    storageBucket: "prova-docker.appspot.com",
    messagingSenderId: "89224636434",
    appId: "1:89224636434:web:8c97c05c7138d88af890cb"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function save(tablename, id, data) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, tablename, id), data);
        const savedData = {
            ...data,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, tablename), data);
        const savedData = {
            ...data,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function get(tablename) {
    const TableRef = collection(db, tablename);

    const q = query(TableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);

    });
    return lista;
}

async function getById(tablename, id) {
    const docRef = doc(db, tablename, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error("404 - not found");
    }

}

async function remove(tablename, id) {
    const dado = await deleteDoc(doc(db, tablename, id));
    return {
        message: `${id} deleted`
    }
}

async function getWithFilter(tablename, property, operator, value) {
    const TableRef = collection(db, tablename);

    const q = query(TableRef, where(property, operator, value));

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);

    });
    return lista;
}

async function update(tablename, id, data) {
    const referenceEntity = await setDoc(doc(db, tablename, id), data);
    const savedData = {
        ...data,
        id: id
    }
    return savedData;
}




module.exports = {
    save,
    get,
    getById,
    remove,
    getWithFilter,
    update
}
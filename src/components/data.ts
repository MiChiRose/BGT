import dataBase from "../../Firebase/firestore";
import {getDoc, doc} from "firebase/firestore";

type DataProps = {
    mainPath: string;
    documentPath: string;
}

export const getData = async ({mainPath, documentPath}: DataProps) => {
    const docRef = doc(dataBase, mainPath, documentPath)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return JSON.parse(JSON.stringify(docSnap.data()));
    } else {
        console.log("There is no data")
    }
}
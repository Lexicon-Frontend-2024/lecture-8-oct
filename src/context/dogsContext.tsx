import { createContext, ReactNode, useState } from "react";

interface DogsContextData {
    dogs: object[];
    updateDogs: (action: string, value: object[]) => void;
}

interface DogsProviderProps {
    children: ReactNode;
}

// skapa contexten med ett initialt värde
export const DogsContext = createContext<DogsContextData>({
    dogs: [],
    updateDogs: () => { }
});

// skapa en context provider för att göra contexten åtkomlig för applikationen
export const DogsContextProvider = ({ children }: DogsProviderProps) => {
    const [dogs, setDogs] = useState<object[]>([]);
    const updateDogs = (action: string, dogs: object[]) => {
        switch (action) {
            case 'add':
                let newDogsArr = [...dogs];
                let newDogObj = dogs[0];
                newDogsArr.push(newDogObj);
                setDogs(newDogsArr);
                break;
            case 'delete':
                // funktionalitet för att ta bort hund
                // kod
                // kod
                break;
            case 'update':
                // funktionalitet för att ändra en hund i listan
                // kod
                // kod
                break;
            case 'set':
                //funktionalitet för att skriva över alla hundar med de från API:et
                setDogs(dogs);
                break;
            default:
                break;
        }
    }
    return (
        <DogsContext.Provider value={{ dogs, updateDogs }}>
            {children}
        </DogsContext.Provider>
    )
}
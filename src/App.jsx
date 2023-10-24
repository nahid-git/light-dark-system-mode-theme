import {ComputerDesktopIcon, MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import {useEffect, useState} from "react";

function App() {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "system");

    useEffect(() => {
        switch (theme) {
            case "dark":
                localStorage.setItem('theme', "dark");
                break;
            case "light":
                localStorage.setItem('theme', "light");
                break;
            default:
                localStorage.setItem('theme', "system");
        }
    }, [theme])

    useEffect(() => {
        if (theme === "dark" || (theme === "system" && systemDark.matches)) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme]);

    systemDark.addEventListener("change", e =>{
        if(e.matches){
            document.documentElement.classList.add("dark")
        }else {
            document.documentElement.classList.remove("dark")
        }
    })
    const handleTheme = () => {
        if (theme === "light") setTheme("dark")
        else if (theme === "dark") setTheme("system")
        else setTheme("light")
    };

    return (<div className='h-screen w-screen flex flex-col justify-center items-center dark:bg-black dark:text-white'>
            <h2>Click icon to change theme.</h2><br/>
            <div className='flex gap-4 mb-4'>
                <button onClick={handleTheme} >
                    {theme === "light" ? <SunIcon className="h-6 w-6"/> : theme === "dark" ?
                        <MoonIcon className="h-6 w-6"/> : <ComputerDesktopIcon className="h-6 w-6"/>}
                </button>
            </div>

            <h2>
                Hello This is Nahid !!!!!
            </h2>
        </div>)
}

export default App

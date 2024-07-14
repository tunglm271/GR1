import {
    faBell,
    faGrip,
    faPlus,
    faCaretDown,
    faUser,
    faChartLine,
    faCalendar,
    faTasks,
    faFile,
    faEllipsis,
    faSearch,
    faUserGroup,
    faTrashAlt,
    faClone,
    faClose,
    faTableCellsLarge,
    faPlusCircle,
    faUserAlt,
    faGear,
    faQuestionCircle,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link, router, usePage } from "@inertiajs/react";
import Logo from "../assets/logo.png";
import MenuTab from "@/Components/DefaultLayout/MenuTab";
import CreateTaskDialog from "@/Components/Dialog/CreateTaskDialog";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect, useState } from "react";
import { Fade, Grow, Slide } from "@mui/material";
import CreateWorkSpaceDialog from "@/Components/Dialog/CreateWorkspaceDialog";
import JoinWorkspaceDialog from "@/Components/Dialog/JoinWorkspaceDialog";

export default function DefaultLayout(props) {
    const { children, auth } = props;
    const { joinedWorkspace } = usePage().props;
    const { checkedTasks, setCheckedTasks,ToggleCreateTask, setToggleCreateTask } = useGlobalContext()
    const [toggleTaskMenu, setToggleTaskMenu] = useState(checkedTasks.size > 0)
    const [toggleNewWorkspace, setToggleNewWorkspace] = useState(false)
    const [createWorkspace, setCreateWorkspace] = useState(false)
    const [joinWorkspace, setJoinWorkspace] = useState(false)
    const [toggleDownMenu, setToggleDownMenu] = useState(false)
    useEffect(() => {
        setToggleTaskMenu(checkedTasks.size > 0);
    },[checkedTasks])

    const handleDeleteTasks = () => {
        router.post("/personal/tasks/multi-delete",{
            checkedTasks: Array.from(checkedTasks)
        });
        setCheckedTasks(new Set());
    }

    const disappearAllPopUp = () => {
        if(toggleNewWorkspace) {
            setToggleNewWorkspace(false);
        }
        if(toggleDownMenu) {
            setToggleDownMenu(false);
        }
    }


    return (
        <div onClick={() => disappearAllPopUp()}>
            <div className="flex w-screen h-10 bg-[#263e50] absolute top-0 px-5 py-2 justify-between max-sm:px-2">
                <Link href="/dashboard">
                    <img
                        src={Logo}
                        alt=""
                        className="h-7 w-7 object-cover my-auto"
                    />
                </Link>

                <div className="w-1/3 relative flex items-center max-sm:hidden">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-7 text-white text-sm placeholder:text-white rounded-md w-full bg-[rgba(255,255,255,0.2)] focus:outline-0 active:outline-none hover:bg-[rgba(255,255,255,0.4)] focus:bg-[rgba(255,255,255,0.4)]"
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        color="white"
                        fontSize={15}
                        className="absolute right-3"
                    />
                </div>

                <div className="flex gap-8  max-md:gap-5">
                    <button className="bg-gradient-to-r from-[#7E35A3] to-[#D8838A] rounded-md px-2 flex gap-1 group hover:brightness-110"
                    onClick={() => setToggleCreateTask(true)}>
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            color="white"
                            fontSize={12}
                            className="my-auto group-hover:scale-125"
                        />
                        <p className="text-white font-medium text-sm my-auto max-md:hidden">
                            New task
                        </p>
                    </button>
                    <FontAwesomeIcon
                        icon={faBell}
                        color="white"
                        fontSize={20}
                        className="my-auto"
                    />
                    <FontAwesomeIcon
                        icon={faGrip}
                        color="white"
                        fontSize={20}
                        className="my-auto"
                    />

                    <button className="flex bg-[rgba(255,255,255,0.2)] rounded-lg gap-3  group hover:bg-[rgba(255,255,255,0.7)] px-2 relative" onClick={() => setToggleDownMenu(true)}>
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            color="white"
                            fontSize={10}
                            className="my-auto"
                        />
                        <p className="text-sm text-white font-bold my-auto">
                            {auth.user.name}
                        </p>
                        <div className="rounded-full bg-blue-300 px-2">
                            <FontAwesomeIcon
                                icon={faUser}
                                color="white"
                                fontSize={12}
                            />
                        </div>
                        <Grow in={toggleDownMenu}>
                            <div className="top-[120%] right-0 h-auto w-60 absolute bg-white drop-shadow-lg py-3 rounded">
                                <div className="border-b-[0.5px] border-gray-300 flex gap-5 px-3 py-2">
                                    <div className="">
                                    <div className="rounded-full bg-blue-300 px-2 flex items-center text-center w-auto h-8 relative">
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            color="white"
                                            fontSize={20}
                                        />
                                        <div className="absolute bg-green-500 border-2 border-white h-3 w-3 rounded-full top-[60%] right-[-15%]"></div>
                                    </div>
                                    </div>
                                    <div className="text-left flex flex-col text-slate-700">
                                        <h1 className="font-semibold text-sm">{auth.user.name}</h1>
                                        <h2 className="text-xs font-light">Online</h2>
                                    </div>
                                </div>

                                <div className="p-2 border-b-[0.5px] border-gray-300">
                                    <div className="flex text-sm gap-2 items-center text-slate-500 rounded w-full px-2 py-1 hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faUserAlt} fontSize={12} color="#64748b"/>
                                    <p>Profile</p>
                                    </div>
                                    <div className="flex text-sm gap-2 items-center text-slate-500 rounded w-full px-2 py-1 hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faGear} fontSize={12} color="#64748b"/>
                                    <p>Setting</p>
                                    </div>
                                    <div className="flex text-sm gap-2 items-center text-slate-500 rounded w-full px-2 py-1 hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faBell} fontSize={12} color="#64748b"/>
                                    <p>Notification Setting</p>
                                    </div>
                                    <div className="flex text-sm gap-2 items-center text-slate-500 rounded w-full px-2 py-1 hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faQuestionCircle} fontSize={12} color="#64748b"/>
                                    <p>Help</p>
                                    </div>
                                </div>

                                <div className="px-2 pt-2">
                                    <div className="flex text-sm gap-2 items-center text-red-300 rounded w-full px-2 py-1 hover:bg-gray-100">
                                        <FontAwesomeIcon icon={faRightFromBracket} fontSize={12} color="#fca5a5"/>
                                        <p>Log out</p>
                                    </div>
                                </div>
                            
                            </div>
                        </Grow>
                    </button>
                </div>
            </div>

            <div className="flex w-screen h-screen pt-10">
                <div className="w-[15%] bg-gray-50 border-r-[0.5px] border-gray-300 ">
                    <div className="border-b-[0.5px] border-gray-300 flex gap-3 px-5 py-2 h-12">
                        <div className="rounded-lg bg-[#AEDEFC] px-3 py-1">
                            <FontAwesomeIcon icon={faUser} fontSize={15} />
                        </div>

                        <div className="flex text-center items-center">
                            <h1 className="font-bold">My Workspace</h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 px-3 py-2">
                        <MenuTab
                            icon={faChartLine}
                            text={"Dashboard"}
                            activeUrl={"/personal/dashboard"}
                        />
                        <MenuTab
                            icon={faCalendar}
                            text={"Calendar"}
                            activeUrl={"/personal/calendar"}
                        />
                        <MenuTab
                            icon={faTasks}
                            text={"My tasks"}
                            activeUrl={"/personal/tasks"}
                        />
                        <MenuTab
                            icon={faFile}
                            text={"Document"}
                            activeUrl={"/personal/document"}
                        />
                        <MenuTab
                            icon={faEllipsis}
                            text={"Show more"}
                            activeUrl={"/personal/options"}
                        />
                    </div>

                    <div className="border-y-[0.5px] border-gray-300 flex gap-3 px-5 py-3">
                        <div className="rounded-lg bg-[#D895DA] px-3 py-1">
                            <FontAwesomeIcon icon={faUserGroup} fontSize={13} />
                        </div>

                        <div className="flex text-center items-center">
                            <h1 className="font-bold">Teams space</h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 px-3 py-2">
                        {joinedWorkspace.map((workspace) => 
                            <MenuTab key={workspace.id}
                            icon={faTableCellsLarge}
                            text={workspace.name}
                            activeUrl={"/workspace/" + workspace.id}
                        />
                        )}
                    </div>



                    <div className="px-3 py-1 relative text-sm">
                        <button className="flex gap-2 px-3 py-2 text-gray-600 rounded w-full hover:bg-gray-200" onClick={() => setToggleNewWorkspace(true)}>
                            <FontAwesomeIcon icon={faPlus} fontSize={20}  color='#4b5563' className="my-auto w-1/5"/>
                            New workspace
                        </button>
                        <Fade in={toggleNewWorkspace}>
                            <div className="absolute z-50 bg-gray-100 flex flex-col shadow-md left-full top-1/2 text-xs rounded-sm w-40">
                                <button className="flex gap-3 px-3 py-2 items-center hover:bg-gray-200" onClick={() => setCreateWorkspace(true)}>
                                    <GroupAddIcon fontSize="small" color="#6F7378"/>
                                    Create workspace
                                </button>

                                <button className="flex gap-3 px-3 py-2 items-center hover:bg-gray-200" onClick={() => setJoinWorkspace(true)}>
                                    <PersonAddIcon fontSize="small" color='#6F7378'/>
                                    Join workspace
                                </button>
                            </div>
                        </Fade> 
                    </div>
                </div>

                    <div className="grow overflow-y-scroll">{children}</div>
            </div>

            <div className="absolute top-5 w-full flex justify-center">
                <Slide in={toggleTaskMenu} style={{ top: '10%' }}>
                    <div className="flex bg-gray-900 w-3/5 h-12 rounded-md text-white px-4 text-sm font-medium items-center justify-between">
                        <button className="my-auto px-3 py-1 rounded-md border-[0.5px] border-gray-500 hover:bg-gray-700">
                            {checkedTasks.size} Task Selected
                            <FontAwesomeIcon icon={faClose} fontSize={11} className="my-auto ml-2"/>
                        </button>

                        <div className="flex">

                    
                        <button className="flex gap-2 px-2 py-1 rounded hover:bg-gray-700">
                            <FontAwesomeIcon icon={faClone} fontSize={13} className="my-auto"/>
                            Duplicate
                        </button>

                        <button className="flex gap-2 px-2 py-1 rounded hover:bg-gray-700" onClick={() => handleDeleteTasks()}>
                            <FontAwesomeIcon icon={faTrashAlt} fontSize={13} color="#b91c1c" className="my-auto"/>
                            <p className="text-red-700">Delete</p>
                        </button>

                        <button className="flex gap-2 px-2 py-1 rounded hover:bg-gray-700">
                            <FontAwesomeIcon icon={faEllipsis} fontSize={13} className="my-auto"/>
                            More
                        </button>
                        </div>
                    </div>
                </Slide>
            </div>

            <CreateTaskDialog 
            onClose={() => setToggleCreateTask(false)}
            open={ToggleCreateTask}
            creater={auth.user.id}
            />
            <CreateWorkSpaceDialog
                onClose={() => setCreateWorkspace(false)}
                open={createWorkspace}
            />
            <JoinWorkspaceDialog
            onClose={() => setJoinWorkspace(false)}
            open={joinWorkspace}
            />
        </div>
    );
}

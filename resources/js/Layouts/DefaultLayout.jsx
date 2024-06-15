import ApplicationLogo from "@/Components/Common/ApplicationLogo";
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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, usePage } from "@inertiajs/react";
import Logo from "../assets/logo.png";
import MenuTab from "@/Components/DefaultLayout/MenuTab";

export default function DefaultLayout({ children }) {
    const { url, component } = usePage();

    return (
        <div>
            <div className="flex w-screen h-11 bg-[#334257] absolute top-0 px-5 py-2 justify-between max-sm:px-2">
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
                        placeholder="Search"
                        className="h-7 rounded-md w-full bg-[rgba(255,255,255,0.5)] focus:outline-0 active:ou hover:bg-[rgba(255,255,255,0.7)] focus:bg-[rgba(255,255,255,0.7)]"
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        color="white"
                        fontSize={15}
                        className="absolute right-3 text-gray-500"
                    />
                </div>

                <div className="flex gap-8  max-md:gap-5">
                    <button className="bg-gradient-to-r from-[#7E35A3] to-[#D8838A] rounded-md px-2 flex gap-2 group hover:brightness-110">
                        <FontAwesomeIcon
                            icon={faPlus}
                            color="white"
                            fontSize={15}
                            className="my-auto group-hover:scale-125"
                        />
                        <p className="text-white font-semibold text-sm my-auto max-md:hidden">
                            Create task
                        </p>
                    </button>
                    <FontAwesomeIcon
                        icon={faBell}
                        color="white"
                        fontSize={25}
                    />
                    <FontAwesomeIcon
                        icon={faGrip}
                        color="white"
                        fontSize={25}
                    />

                    <button className="flex bg-[rgba(255,255,255,0.2)] rounded-lg gap-3  group hover:bg-[rgba(255,255,255,0.7)] px-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            color="white"
                            fontSize={10}
                            className="my-auto"
                        />
                        <p className="text-sm text-white font-bold my-auto">
                            Username
                        </p>
                        <div className="rounded-full bg-blue-300 px-2 my-auto">
                            <FontAwesomeIcon
                                icon={faUser}
                                color="white"
                                fontSize={15}
                            />
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex w-screen h-screen pt-11">
                <div className="w-1/6 bg-gray-50 border-r-[0.5px] border-gray-300 ">
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
                </div>

                <div className="grow">{children}</div>
            </div>
        </div>
    );
}

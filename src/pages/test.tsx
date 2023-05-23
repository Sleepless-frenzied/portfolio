import { useState } from "react";

type Info = {
    length: number;
    width: number;
    height: number;
};

type Window = {
    info: Info;
};

type Wall = {
    info: Info;
    windows: Window[];
};

type Room = {
    walls: Wall[];
};

const initialRoom: Room = {
    walls: [],
};

type AddWallButtonProps = {
    onAddWall: () => void;
};

const AddWallButton = ({ onAddWall }: AddWallButtonProps) => {
    return <button onClick={onAddWall}>Add Wall</button>;
};

type AddWindowButtonProps = {
    onAddWindow: () => void;
};

const AddWindowButton = ({ onAddWindow }: AddWindowButtonProps) => {
    return <button onClick={onAddWindow}>Add Window</button>;
};
const Test = () => {
    const [room, setRoom] = useState(initialRoom);

    const handleWallInfoChange = (
        wallIndex: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setRoom((prevRoom) => {
            const walls = [...prevRoom.walls];
            walls[wallIndex] = {
                ...walls[wallIndex],
                info: {
                    ...walls[wallIndex].info,
                    [name]: Number(value),
                },
            };
            return {
                ...prevRoom,
                walls,
            };
        });
    };

    const handleWindowInfoChange = (
        wallIndex: number,
        windowIndex: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setRoom((prevRoom) => {
            const walls = [...prevRoom.walls];
            const windows = [...walls[wallIndex].windows];
            windows[windowIndex] = {
                ...windows[windowIndex],
                info: {
                    ...windows[windowIndex].info,
                    [name]: Number(value),
                },
            };
            walls[wallIndex] = {
                ...walls[wallIndex],
                windows,
            };
            return {
                ...prevRoom,
                walls,
            };
        });
    };

    const addWall = () => {
        setRoom((prevRoom) => ({
            walls: [
                ...prevRoom.walls,
                {
                    info: { length: 0, width: 0, height: 0 },
                    windows: [],
                },
            ],
        }));
    };

    const addWindow = (wallIndex: number) => {
        setRoom((prevRoom) => {
            const walls = [...prevRoom.walls];
            const windows = [...walls[wallIndex].windows];
            windows.push({ info: { length: 0, width: 0, height: 0 } });
            walls[wallIndex] = {
                ...walls[wallIndex],
                windows,
            };
            return {
                ...prevRoom,
                walls,
            };
        });
    };

    return (
        <div>
            {room.walls.map((wall, wallIndex) => (
                <div key={wallIndex}>
                    <h2>Wall {wallIndex + 1}</h2>
                    <label>
                        Length:
                        <input
                            type="number"
                            name="length"
                            value={wall.info.length}
                            onChange={(e) => handleWallInfoChange(wallIndex, e)}
                        />
                    </label>
                    <label>
                        Width:
                        <input
                            type="number"
                            name="width"
                            value={wall.info.width}
                            onChange={(e) => handleWallInfoChange(wallIndex, e)}
                        />
                    </label>
                    <label>
                        Height:
                        <input
                            type="number"
                            name="height"
                            value={wall.info.height}
                            onChange={(e) => handleWallInfoChange(wallIndex, e)}
                        />
                    </label>
                    <AddWindowButton onAddWindow={() => addWindow(wallIndex)} />
                    {wall.windows.map((window, windowIndex) => (
                        <div key={windowIndex}>
                            <h3>Window {windowIndex + 1}</h3>
                            <label>
                                Length:
                                <input
                                    type="number"
                                    name="length"
                                    value={window.info.length}
                                    onChange={(e) => handleWindowInfoChange(wallIndex, windowIndex, e)}
                                />
                            </label>
                            <label>
                                Width:
                                <input
                                    type="number"
                                    name="width"
                                    value={window.info.width}
                                    onChange={(e) => handleWindowInfoChange(wallIndex, windowIndex, e)}
                                />
                            </label>
                            <label>
                                Height:
                                <input
                                    type="number"
                                    name="height"
                                    value={window.info.height}
                                    onChange={(e) => handleWindowInfoChange(wallIndex, windowIndex, e)}
                                />
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <AddWallButton onAddWall={addWall} />
        </div>
    );
};

export default Test;

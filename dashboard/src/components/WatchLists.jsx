import React, { useState, useContext } from "react";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material"
import { Tooltip, Grow } from "@mui/material";
import GeneralContext from "./GeneralContext";

const WatchListItem = ({ stock, key }) => {
    const [showWatchListActions, setShowWatchListActions] = useState(false);

    const handleMouseEnter = () => {
        setShowWatchListActions(true);
    }

    const handleMouseLeave = () => {
        setShowWatchListActions(false);
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={key}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="item-info">
                    <span className="percent">{stock.percent}</span>
                    {
                        stock.isDown ? (
                            <KeyboardArrowDown className="down" />
                        ) : (
                            <KeyboardArrowUp className="up" />
                        )
                    }
                    <p className={stock.isDown ? "down" : "up"}>{stock.price}</p>
                </div>
            </div>
            {showWatchListActions && <WatchListActions uid={stock.name} />}
        </li>
    )
}


const WatchListActions = ({ uid }) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
        generalContext.openBuyWindow(uid);
    };

    const handleSellClick = () => {
        generalContext.openSellWindow(uid);
    };

    return (
        <span className="actions">
                <Tooltip
                    title="Buy (B)"
                    placement="top"
                    arrow
                    className="WBuy"
                    // onTransitionEnd={Grow}
                    onClick={handleBuyClick}
                >
                    <button className="buy"> Buy </button>
                </Tooltip>
                <Tooltip
                    title="Sell (S)"
                    placement="top"
                    arrow
                    className="WSell"
                    // onTransitionEnd={Grow}
                    onClick={handleSellClick}
                >
                    <button className="sell"> Sell </button>
                </Tooltip>
                <Tooltip
                    title="Analytics (A)"
                    placement="top"
                    arrow
                    className="analyticsBtn"
                // onTransitionEnd={Grow}
                >
                    <button className="action">
                        <BarChartOutlined className="icon" />
                    </button>
                </Tooltip>
                <Tooltip
                    title="More"
                    placement="top"
                    arrow
                    className="moreBtn"
                // onTransitionEnd={Grow}
                >
                    <button className="action">
                        <MoreHoriz className="icon" />
                    </button>
                </Tooltip>
        </span>
    )
}

export { WatchListItem, WatchListActions }
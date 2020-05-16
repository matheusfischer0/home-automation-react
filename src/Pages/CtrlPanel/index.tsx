import React, { useState, useEffect, FormEvent } from 'react';

import { FiHome, FiMenu, FiPower } from 'react-icons/fi';
import { FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Header, Grid } from './style';

const CtrlPanel: React.FC = () => {
    return (
        <>
            <Header>
                <Link to="/control-panel">
                    <FiHome size={30} />
                </Link>
                <strong>Control panel</strong>
                <Link to="/control-panel">
                    <FiMenu size={30} />
                </Link>
            </Header>

            <Grid>
                <button>
                    <FiPower size={25} />
                    <strong>On/Off</strong>
                </button>
                <button>
                    <FaLightbulb size={25} />
                    <strong>On/Off</strong>
                </button>
            </Grid>
        </>
    );
};

export default CtrlPanel;

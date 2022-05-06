import React, { useState, useContext, useEffect } from 'react';
import { qr_generator } from '../apis/apis';
import axios from 'axios';
import AppContext from '../contexts/AppContext';

const useGetQR = (link) => {
	const code = qr_generator + link;
	return code;
};

export default useGetQR;


import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const theme = createTheme({});

export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path='/' element={<div />}></Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

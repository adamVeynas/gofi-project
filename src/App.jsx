import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import AuthLogin from "./pages/AuthLogin/AuthLogin";
import LandingPage from "./pages/LandingPage/LandingPage";
import Personal from "./pages/Personal/Personal";
import PersonalSettings from "./pages/PersonalSettings/PersonalSettings";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";
import EditPost from "./pages/EditPost/EditPost";
import Support from "./pages/Support/Support";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/personal" element={<Layout />}>
                    <Route index element={<Personal />} />
                    <Route path="settings" element={<PersonalSettings />} />
                </Route>
                <Route path="/posts" element={<Layout />}>
                    <Route index element={<Posts />} />
                    <Route path=":postID" element={<Post />} />
                    <Route path=":postID/editpost" element={<EditPost />} />
                </Route>
				<Route path="/support" element={<Layout />}>
					<Route index element={<Support />} />
				</Route>
                <Route path="/auth/login" element={<AuthLogin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

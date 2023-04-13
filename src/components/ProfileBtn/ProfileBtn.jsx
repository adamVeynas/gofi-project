function ProfileBtn({ children, ...args }) {
    return (
        <button type="button" className="profile-btn" {...args}>
            {children}
        </button>
    );
}

export default ProfileBtn;

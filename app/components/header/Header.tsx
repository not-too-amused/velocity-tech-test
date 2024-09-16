import "./Header.css";

const Header = () => {

    return (
        <header className="header">
            <div className="header__logo">
                <svg width="130" height="18" viewBox="0 0 130 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.736 17V0.199999H2.512V15.464H11.92V17H0.736ZM41.8847 17.144C40.6207 17.144 39.4447 16.936 38.3567 16.52C37.2847 16.088 36.3487 15.488 35.5487 14.72C34.7647 13.936 34.1487 13.032 33.7007 12.008C33.2687 10.968 33.0527 9.832 33.0527 8.6C33.0527 7.368 33.2687 6.24 33.7007 5.216C34.1487 4.176 34.7647 3.272 35.5487 2.504C36.3487 1.72 37.2847 1.12 38.3567 0.704C39.4287 0.271999 40.6047 0.0559993 41.8847 0.0559993C43.1487 0.0559993 44.3167 0.271999 45.3887 0.704C46.4607 1.12 47.3887 1.712 48.1727 2.48C48.9727 3.248 49.5887 4.152 50.0207 5.192C50.4687 6.232 50.6927 7.368 50.6927 8.6C50.6927 9.832 50.4687 10.968 50.0207 12.008C49.5887 13.048 48.9727 13.952 48.1727 14.72C47.3887 15.488 46.4607 16.088 45.3887 16.52C44.3167 16.936 43.1487 17.144 41.8847 17.144ZM41.8847 15.56C42.8927 15.56 43.8207 15.392 44.6687 15.056C45.5327 14.704 46.2767 14.216 46.9007 13.592C47.5407 12.952 48.0367 12.216 48.3887 11.384C48.7407 10.536 48.9167 9.608 48.9167 8.6C48.9167 7.592 48.7407 6.672 48.3887 5.84C48.0367 4.992 47.5407 4.256 46.9007 3.632C46.2767 2.992 45.5327 2.504 44.6687 2.168C43.8207 1.816 42.8927 1.64 41.8847 1.64C40.8767 1.64 39.9407 1.816 39.0767 2.168C38.2127 2.504 37.4607 2.992 36.8207 3.632C36.1967 4.256 35.7007 4.992 35.3327 5.84C34.9807 6.672 34.8047 7.592 34.8047 8.6C34.8047 9.592 34.9807 10.512 35.3327 11.36C35.7007 12.208 36.1967 12.952 36.8207 13.592C37.4607 14.216 38.2127 14.704 39.0767 15.056C39.9407 15.392 40.8767 15.56 41.8847 15.56ZM82.0415 17.144C80.7615 17.144 79.5775 16.936 78.4895 16.52C77.4175 16.088 76.4815 15.488 75.6815 14.72C74.8975 13.952 74.2815 13.048 73.8335 12.008C73.4015 10.968 73.1855 9.832 73.1855 8.6C73.1855 7.368 73.4015 6.232 73.8335 5.192C74.2815 4.152 74.9055 3.248 75.7055 2.48C76.5055 1.712 77.4415 1.12 78.5135 0.704C79.6015 0.271999 80.7855 0.0559993 82.0655 0.0559993C83.3455 0.0559993 84.5135 0.255999 85.5695 0.655999C86.6415 1.056 87.5535 1.664 88.3055 2.48L87.2015 3.608C86.4975 2.904 85.7215 2.4 84.8735 2.096C84.0255 1.792 83.1135 1.64 82.1375 1.64C81.0975 1.64 80.1375 1.816 79.2575 2.168C78.3935 2.504 77.6335 2.992 76.9775 3.632C76.3375 4.256 75.8335 4.992 75.4655 5.84C75.1135 6.672 74.9375 7.592 74.9375 8.6C74.9375 9.592 75.1135 10.512 75.4655 11.36C75.8335 12.208 76.3375 12.952 76.9775 13.592C77.6335 14.216 78.3935 14.704 79.2575 15.056C80.1375 15.392 81.0895 15.56 82.1135 15.56C83.0735 15.56 83.9775 15.416 84.8255 15.128C85.6895 14.84 86.4815 14.352 87.2015 13.664L88.2095 15.008C87.4095 15.712 86.4735 16.248 85.4015 16.616C84.3295 16.968 83.2095 17.144 82.0415 17.144ZM86.5055 14.792V8.6H88.2095V15.008L86.5055 14.792ZM120.58 17.144C119.316 17.144 118.14 16.936 117.052 16.52C115.98 16.088 115.044 15.488 114.244 14.72C113.46 13.936 112.844 13.032 112.396 12.008C111.964 10.968 111.748 9.832 111.748 8.6C111.748 7.368 111.964 6.24 112.396 5.216C112.844 4.176 113.46 3.272 114.244 2.504C115.044 1.72 115.98 1.12 117.052 0.704C118.124 0.271999 119.3 0.0559993 120.58 0.0559993C121.844 0.0559993 123.012 0.271999 124.084 0.704C125.156 1.12 126.084 1.712 126.868 2.48C127.668 3.248 128.284 4.152 128.716 5.192C129.164 6.232 129.388 7.368 129.388 8.6C129.388 9.832 129.164 10.968 128.716 12.008C128.284 13.048 127.668 13.952 126.868 14.72C126.084 15.488 125.156 16.088 124.084 16.52C123.012 16.936 121.844 17.144 120.58 17.144ZM120.58 15.56C121.588 15.56 122.516 15.392 123.364 15.056C124.228 14.704 124.972 14.216 125.596 13.592C126.236 12.952 126.732 12.216 127.084 11.384C127.436 10.536 127.612 9.608 127.612 8.6C127.612 7.592 127.436 6.672 127.084 5.84C126.732 4.992 126.236 4.256 125.596 3.632C124.972 2.992 124.228 2.504 123.364 2.168C122.516 1.816 121.588 1.64 120.58 1.64C119.572 1.64 118.636 1.816 117.772 2.168C116.908 2.504 116.156 2.992 115.516 3.632C114.892 4.256 114.396 4.992 114.028 5.84C113.676 6.672 113.5 7.592 113.5 8.6C113.5 9.592 113.676 10.512 114.028 11.36C114.396 12.208 114.892 12.952 115.516 13.592C116.156 14.216 116.908 14.704 117.772 15.056C118.636 15.392 119.572 15.56 120.58 15.56Z" fill="currentColor" />
                </svg>
            </div>
            <div className="header__icon-container">
                <button className="header__icon header__icon--sign-in" type="button">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M27 15.5C27 11.36 23.64 8 19.5 8C15.36 8 12 11.36 12 15.5C12 17.78 13.017 19.823 14.625 21.2C11.28 22.955 9 26.459 9 30.5C9 31.328 9.672 32 10.5 32C11.328 32 12 31.328 12 30.5C12 26.36 15.36 23 19.5 23C23.64 23 27 26.36 27 30.5C27 31.328 27.672 32 28.5 32C29.328 32 30 31.328 30 30.5C30 26.4605 27.72 22.955 24.375 21.2C25.9845 19.82 27 17.78 27 15.5ZM19.5 20C17.0145 20 15 17.9855 15 15.5C15 13.0145 17.0145 11 19.5 11C21.9855 11 24 13.0145 24 15.5C24 17.9855 21.9855 20 19.5 20Z" fill="currentColor" />
                    </svg>
                    <span>Sign in</span>
                </button>
                <button className="header__icon header__icon--cart" type="button" onClick={() => { }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M31.9295 17.267L29.4995 29.336C29.177 30.863 27.8465 31.967 26.2895 32H13.7105C12.1505 31.967 10.82 30.8645 10.4975 29.336L8.06897 17.267C7.88297 16.4675 8.07347 15.626 8.58947 14.987C9.10397 14.348 9.88547 13.982 10.7045 14H14.015C14.015 10.685 16.7 8 20.0075 8C23.3165 8 26 10.685 26 14H29.2955C30.116 13.985 30.8975 14.348 31.4135 14.987C31.928 15.626 32.1185 16.4675 31.9325 17.267H31.9295ZM13.385 28.733C13.439 28.8755 13.565 28.9775 13.715 29H26.288C26.438 28.976 26.5625 28.874 26.615 28.733L27.17 26H12.8375L13.3865 28.733H13.385ZM20.006 11C18.35 11 17.009 12.3425 17.009 14H23C23 12.3425 21.6605 11 20.006 11ZM11.027 17L12.2345 23H27.7775L28.9925 16.991H11.015L11.03 17H11.027Z" fill="currentColor" />
                    </svg>
                    <span>View Cart</span>
                </button>
            </div>
        </header>
    )
}


export default Header


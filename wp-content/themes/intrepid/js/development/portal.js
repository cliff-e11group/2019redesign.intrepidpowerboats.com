$(function () {

    var $portalLogin = $('.portal-login');

    if ($portalLogin.length > 0) {
        var $portalLogin__login = $portalLogin.find('.portal-login__login'),
            $portalLogin__createAccount = $portalLogin.find('.portal-login__create-account'),
            $portalLogin__lostPassword = $portalLogin.find('.portal-login__lost-password'),
            $portalLogin__linkForgotPassword = $portalLogin.find('.portal-login__link-forgot-password'),
            $portalLogin__linkCreateAccount = $portalLogin.find('.portal-login__link-create-account'),
            $portalLogin__linkBackCreateAccount = $portalLogin.find('.portal-login__link-back-from-create-account'),
            $portalLogin__linkBackLostPass = $portalLogin.find('.portal-login__link-back-from-lost-pass');

        $portalLogin__linkForgotPassword.on('click', function () {
            $portalLogin__login.fadeOut(300, function () {
                    $portalLogin__lostPassword.fadeIn(300);
                }
            );
        });

        $portalLogin__linkBackLostPass.on('click', function () {
            $portalLogin__lostPassword.fadeOut(300, function () {
                    $portalLogin__login.fadeIn(300);
                }
            );
        });

        $portalLogin__linkCreateAccount.on('click', function () {
            $portalLogin__login.fadeOut(300, function () {
                    $portalLogin__createAccount.fadeIn(300);
                }
            );
        });

        $portalLogin__linkBackCreateAccount.on('click', function () {
            $portalLogin__createAccount.fadeOut(300, function () {
                    $portalLogin__login.fadeIn(300);
                }
            );
        });
    }

});

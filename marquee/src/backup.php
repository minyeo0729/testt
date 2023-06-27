<?php include $_SERVER['DOCUMENT_ROOT'] . '/main/header.php'; ?>

<div class="bg-light w-100 h-100">
    <div class="container-xl py-5">
        <div class="row justify-content-center">
            <div class="col-lg-3">
                <div class="text-center">
                    <a class="jt-admin-logo" href="https://studio-jt.co.kr/">
                        <span>STUDIO JT</span>
                    </a>
                </div>
                <div class="jt-callout mb-4 py-3 border-left-primary bg-white small">
                    이 사이트에 회원가입
                </div>
                <form class="">
                    <!-- Form Group (username)-->
                    <div class="mb-3">
                        <label for="inputId" class="mb-1">사용자명</label>
                        <input class="form-control" id="inputId" type="text">
                    </div>
                    <!-- Form Group (email address)-->
                    <div class="mb-3">
                        <label for="inputEmail" class="mb-1">이메일</label>
                        <input class="form-control" id="inputEmail" type="email">
                        
                    </div>
                    <!-- Form Group (username)-->
                    <div class="mb-3">
                        <label for="inputUsername" class="mb-1">이름 <span class="invalid-feedback d-inline">(required)</span></label>
                        <input class="form-control" id="inputUsername" type="text">
                    </div>
                    <small>가입 확인용 이메일이 발송될 것입니다.</small>
                    <!-- Form Group (submit box)-->
                    <div class="d-flex align-items-center justify-content-end mt-4 mb-0">
                        <a class="btn btn-primary" href="/main/page/join/">회원가입</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/main/footer.php'; ?>
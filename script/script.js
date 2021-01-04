/* eslint-disable no-use-before-define */
window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line strict
    'use strict';

    // Preloader
    const preoladerForm = () => {
        const preloader = document.querySelector('#page-preloader'),
            spinner = document.querySelector('.cssload-box-loading');

        setTimeout(() => {
            preloader.style.display = 'none';
            spinner.style.display = 'none';
        }, 500);

    };

    // Меню
    const toggleMenu = () => {

        const handlerMenu = () => {

            const target = event.target;

            const displayMenu = () => {
                document.querySelector('menu').classList.toggle('active-menu');
            };

            if (target.closest('.menu') ||
				(!target.closest('menu') &&
					document.querySelector('menu').classList.contains('active-menu'))) {
                displayMenu();
            }

            if (target.closest('menu') && target.closest('[href^="#"]')) {
                displayMenu();
            }
        };

        document.body.addEventListener('click', handlerMenu);
    };

    // Calculation 
    const makeCalc = () => {

        let calcAmount = document.querySelector(".calc-amount"),
            calcExpenses = document.querySelector(".calc-expenses");
            
        const calcBtnGet = document.querySelector(".calc-btn-get"),
            calcBtnOk = document.querySelector(".calc-btn-ok"),
            calcValue = document.querySelector(".calc-value"),
            titleValue = document.querySelector(".title-value"),
            titleCalc = document.querySelector(".title-calc"),
            calcBlock = document.querySelector(".calc-block"),
            calcCalculation = document.querySelector(".calc-calculation"),
            calcPiggyBank = document.querySelector(".calc-piggy_bank"),
            calcName = document.querySelector(".calc-name"),
            calcStudy = document.querySelector(".calc-study"),
            calcJustCase = document.querySelector(".calc-just_in_case");

        calcBtnGet.addEventListener('click', e => {

            e.preventDefault();

            calcBtnGet.classList.add('d-none');
            calcBtnOk.classList.remove('d-none');

            calcValue.classList.add('d-none');
            calcCalculation.classList.remove('d-none');

            titleValue.classList.add('d-none');
            titleCalc.classList.remove('d-none');


            calcBtnOk.addEventListener('click', () => {
                calcAmount.value = '';
                calcExpenses.value = '';

                calcBtnGet.classList.remove('d-none');
                calcBtnOk.classList.add('d-none');

                calcValue.classList.remove('d-none');
                calcCalculation.classList.add('d-none');

                titleValue.classList.remove('d-none');
                titleCalc.classList.add('d-none');
            });

            let total = +calcAmount.value - +calcExpenses.value;

            calcPiggyBank.value = total*0.5;
            calcName.value = total*0.3;
            calcStudy.value = total*0.1;
            calcJustCase.value = total*0.1;

        });

        // Enter Only Numbers!
        const enterOnlyNumbers = () => {

            calcBlock.addEventListener('input', e => {

                if (e.target.matches('.calc-amount') ||
                e.target.matches('.calc-expenses')) {
                    e.target.value = e.target.value.replace(/\D/g, '');
                }
            });
        };
        enterOnlyNumbers();

    };


    
    toggleMenu();
    preoladerForm();
    makeCalc();

});
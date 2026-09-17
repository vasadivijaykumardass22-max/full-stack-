
        // Load centered stylesheet (tries a few common paths)
        function loadStylesheet(paths){
            for(const p of paths){
                try{
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = p;
                    document.head.appendChild(link);
                    return;
                } catch {
                    // ignore and try next
                }
            }
        }

        document.addEventListener('DOMContentLoaded', function(){
            loadStylesheet(['registration-center.css','src/registration-center.css','./src/registration-center.css']);

            const form = document.getElementById('registrationForm');
            if(!form) return;

            // If not already wrapped, wrap the form with the centered card structure
            if(!document.querySelector('.registration-wrapper')){
                const wrapper = document.createElement('div');
                wrapper.className = 'registration-wrapper';

                const card = document.createElement('div');
                card.className = 'registration-card';

                const title = document.createElement('h1');
                title.className = 'title';
                title.textContent = 'Registration Form';

                const subtitle = document.createElement('p');
                subtitle.className = 'subtitle';
                subtitle.textContent = 'Create your account';

                // Insert wrapper before the form's current parent
                form.parentNode.insertBefore(wrapper, form);
                wrapper.appendChild(card);
                card.appendChild(title);
                card.appendChild(subtitle);
                card.appendChild(form);

                // style submit button if present
                const submit = form.querySelector('input[type="submit"], button[type="submit"]');
                if(submit) submit.classList.add('btn-submit');
            }

            form.addEventListener('submit', function(event){
                event.preventDefault();

                const nameEl = document.getElementById('name');
                const emailEl = document.getElementById('email');
                const phoneEl = document.getElementById('phone');

                const name = nameEl ? nameEl.value : '';
                const email = emailEl ? emailEl.value : '';
                const phone = phoneEl ? phoneEl.value : '';

                const userData = { name, email, phone };
                localStorage.setItem('userData', JSON.stringify(userData));

                window.location.href = 'Display.html';
            });
        });
        
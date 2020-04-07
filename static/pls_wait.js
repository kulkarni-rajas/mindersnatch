angular
    .module('profileLoading', [])

    .controller('ProfileLoadingController', function ($scope) {
        var vm = this;

        vm.title = 'New questions will be added soon!';
        vm.message = 'Please, be patient.';

        var clockHand = document.getElementById('clock-hand'),
            text = document.getElementById('profile-loading__text');

        TweenMax.to(clockHand, 20, { rotation: "360", ease: Linear.easeNone, transformOrigin: "left center", repeat: -1 });


        var textTimeline = new TimelineMax({
            repeat: -1
        });

        textTimeline
            .from('#profile-loading__text-1', 2, { autoAlpha: 0, display: 'block' })
            .to('#profile-loading__text-1', 2, { autoAlpha: 0, display: 'none' })
            .from('#profile-loading__text-2', 2, { autoAlpha: 0, display: 'none' })
            .to('#profile-loading__text-2', 2, { autoAlpha: 0, display: 'block' })


    });

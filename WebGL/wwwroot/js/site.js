// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
$(document).ready(function () {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(20, 20, 20);
    var material = new THREE.MeshLambertMaterial({ color: 0xfd59d7 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 100;

    var light = new THREE.PointLight(0xFFFF00);
    light.position.set(10, 0, 25);
    scene.add(light);



    var render = function () {
        requestAnimationFrame(render);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        camera.updateProjectionMatrix();

        renderer.render(scene, camera);
    };

    render();

    // dat gui
    var gui = new dat.GUI();
    var cameraGui = gui.addFolder("camera position");
    cameraGui.add(camera.position, 'x');
    cameraGui.add(camera.position, 'y');
    cameraGui.add(camera.position, 'z');
    cameraGui.open();

    var cameraProj = gui.addFolder("camera projection");
    cameraProj.add(camera, "fov");
    cameraProj.open();

    var lightGui = gui.addFolder("light position");
    lightGui.add(light.position, 'x');
    lightGui.add(light.position, 'y');
    lightGui.add(light.position, 'z');
    lightGui.open();

    var cubeGui = gui.addFolder("cube position");
    cubeGui.add(cube.position, 'x');
    cubeGui.add(cube.position, 'y');
    cubeGui.add(cube.position, 'z');
    cubeGui.open();
});
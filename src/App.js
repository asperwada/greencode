import * as THREE from 'three';
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, Environment, Float } from '@react-three/drei';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import "./style.css";
import "./i18n";

function Model() {
    const { scene } = useGLTF('/earth.glb');

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                // Настраиваем материалы для взаимодействия со светом
                child.material.roughness = 0.7;
                child.material.metalness = 0.4;
                if (child.material.emissive) {
                    child.material.emissiveIntensity = 0.7;
                }
            }
        });
    }, [scene]);

    return (
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            <primitive object={scene} scale={2.8} position={[0, 0, 0]} />
        </Float>
    );
}

function App() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div style={{ background: '#000' }}>
            <Header />
            <div style={{ width: "100vw", height: "100vh", position: 'relative', overflow: 'hidden' }}>

                {/* UI контент поверх 3D */}
                <div style={{
                    position: 'absolute', zIndex: 10, color: 'white',
                    top: '25%', left: '5%', maxWidth: '800px', pointerEvents: 'none'
                }}>
                    <h1 style={{fontSize: 'clamp(3rem, 10vw, 6rem)', margin: 0, fontWeight: 900, lineHeight: 0.85}}>
                        {t('hero.title')}<br/>
                        <span style={{color: '#4fa'}}>{t('hero.subtitle')}</span>
                    </h1>
                    <p style={{fontSize: '1.2rem', margin: '40px 0', opacity: 0.7, maxWidth: "400px"}}>
                        {t('hero.desc')}
                    </p>
                    <button className="btn-main" style={{pointerEvents: 'auto'}} onClick={() => navigate("/info")}>
                        {t('header.explore')}
                    </button>
                </div>

                <Canvas
                    camera={{ position: [0, 0, 10], fov: 45 }}
                    style={{position: 'absolute', top: 0}}
                    gl={{ antialias: true }}
                >
                    {/* ОСВЕЩЕНИЕ */}
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[10, 10, 5]} intensity={2.5} color="#fffde7" />
                    <spotLight position={[-10, -10, -10]} intensity={1.5} color="#2266ff" />

                    <Suspense fallback={null}>
                        <Model />
                        <Environment preset="night" />
                    </Suspense>

                    <Stars radius={150} depth={50} count={6000} factor={4} fade speed={0.5} />

                    {/* ЭФФЕКТЫ (если установили библиотеку) */}
                    <EffectComposer disableNormalPass>
                        <Bloom luminanceThreshold={1} mipmapBlur intensity={1} radius={0.4} />
                        <ToneMapping />
                    </EffectComposer>

                    {/* СВОБОДНОЕ УПРАВЛЕНИЕ */}
                    <OrbitControls
                        enableZoom={true}       // Теперь можно приближать/отдалять
                        minDistance={5}         // Максимальное приближение
                        maxDistance={20}        // Максимальное отдаление
                        enablePan={false}       // Запрет смещения (чтобы планета всегда была в центре)
                        enableDamping={true}    // Плавность вращения (инерция)
                        dampingFactor={0.05}
                        autoRotate={true}       // Авто-вращение
                        autoRotateSpeed={0.5}   // Скорость авто-вращения
                    />
                </Canvas>
            </div>
        </div>
    );
}

export default App;
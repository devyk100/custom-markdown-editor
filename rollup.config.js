// rollup.config.js
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'es',
        format: 'dist/index.js',
        plugins: [
            terser({
                module: true,
                mangle: { topLevel: true },
                compress: {
                    module: true,
                    toplevel: true,
                    unsafe_arrows: true,
                    drop_console: true,
                    drop_debugger: true
                }
            })
        ]
    },
    plugins: [typescript()]
};
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/bean/')({
    component: RouteComponent,
});

function RouteComponent() {
    return <>
        <p>Här kan du testa olika färdigbyggda UI-komponenter</p>
    </>;
}

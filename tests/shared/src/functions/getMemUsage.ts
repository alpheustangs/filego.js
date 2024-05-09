const getMemUsage = ({
    name,
}: {
    name: string;
}): void => {
    const formatMemData = (data: number): string => {
        return `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;
    };

    const memData: NodeJS.MemoryUsage = process.memoryUsage();

    console.log("");
    console.log("============================");
    console.log(`${name}`);
    console.log("============================");
    console.log(`Heap: ${formatMemData(memData.heapUsed)}`);
    console.log(`V8: ${formatMemData(memData.external)}`);
    console.log("============================");
    console.log(`Total: ${formatMemData(memData.rss)}`);
    console.log("============================");
    console.log("");
};

export { getMemUsage };

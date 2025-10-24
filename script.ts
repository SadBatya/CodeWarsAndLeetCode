export type TreeNode = {
  id: number;
  color: "red" | "yellow";
  children: TreeNode[];
};

export const getRedIds = (tree: TreeNode): number[] => {
  const result: number[] = [];

  const traverse = (node: TreeNode) => {
    if (node.color === "red") {
      result.push(node.id);
    }

    node.children?.forEach(traverse);
  };

  traverse(tree);

  return result;
};

import { Form, Button, Select, Table, Tag, Space, Spin } from "antd";
import Input from "antd/lib/input/Input";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { useEffect } from "react";
import { SketchPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import {
  addCategory,
  deleteCategory,
  updateCategory,
} from "../store/actions/categoryActions";
import { Category, CategoryForm } from "../types/category";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
type Mode = "new" | "edit" | "delete";

const emptyForm: CategoryForm = {
  name: "",
  type: "expense",
  color: "black",
};

const Categories = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.categories
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("new");
  const [form, setForm] = useState<CategoryForm>(emptyForm);
  const [updateId, setUpdateId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const showModal = (mode: Mode) => {
    setIsModalVisible(true);
    setMode(mode);
    setForm(emptyForm);
  };

  const handleOk = () => {
    if (mode === "new") dispatch(addCategory(form));
    else if (mode === "edit")
      dispatch(updateCategory(form, updateId as number));
    else if (mode === "delete" && typeof deleteId === "number")
      dispatch(deleteCategory(deleteId));
    dispatch(addCategory(form));
    setIsModalVisible(false);
    setMode("new");
    setForm(emptyForm);
    setUpdateId(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setMode("new");
    setForm(emptyForm);
    setUpdateId(null);
    setDeleteId(null);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text: string, category: Category) => {
        return <Tag color={category.color}>{text.toUpperCase()}</Tag>;
      },
    },

    {
      title: "Action",
      key: "action",
      render: (text: string, category: Category) => (
        <Space size="middle">
          <EditOutlined
            style={{ color: "blue" }}
            onClick={() => {
              showModal("edit");
              setForm(category);
              setUpdateId(category.id);
            }}
          />
          <DeleteOutlined
            style={{ color: "red" }}
            onClick={() => {
              showModal("delete");
              setDeleteId(category.id);
            }}
          />
        </Space>
      ),
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getCategories());
  }, []);
  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary" onClick={() => showModal("new")}>
            New Category
          </Button>
        </div>
        <Modal
          title={
            mode === "new"
              ? "Create New Category"
              : mode === "edit"
              ? "Update Category"
              : "Delete Category"
          }
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ disabled: !(mode === "delete") && !form.name }}
        >
          {mode === "edit" || mode === "new" ? (
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Form.Item label="Category Name" required>
                <Input
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Form.Item>
              <Form.Item label="category Type">
                <Select
                  defaultValue="expense"
                  value={form.type}
                  onChange={(type) =>
                    setForm({
                      ...form,
                      type: type === "income" ? "income" : "expense",
                    })
                  }
                >
                  <Select.Option value="income">Income</Select.Option>
                  <Select.Option value="expense">Expense</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Color">
                <SketchPicker
                  color={form.color}
                  onChange={(color) => setForm({ ...form, color: color.hex })}
                />
              </Form.Item>
            </Form>
          ) : mode === "delete" ? (
            <>Are you sure ? </>
          ) : null}
        </Modal>
      </div>
      <Table loading={loading} columns={columns} dataSource={data} />;
    </>
  );
};

export default Categories;

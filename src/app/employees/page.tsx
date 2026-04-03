"use client";

import { Users, Download, Printer, Pencil, Trash2 } from "lucide-react";

const employees = [
  { id: "EMP-2940", name: "Alex Rivers", email: "alex.rivers@manpower.pro", role: "Lead Developer", contact: "+1 (555) 012-3456", status: "Active" },
  { id: "EMP-2941", name: "Sarah Jenkins", email: "s.jenkins@manpower.pro", role: "UX Designer", contact: "+1 (555) 012-3457", status: "Active" },
  { id: "EMP-2942", name: "Vikram Singh", email: "v.singh@manpower.pro", role: "Project Manager", contact: "+1 (555) 012-3458", status: "Inactive" },
  { id: "EMP-2943", name: "Martha Stewart", email: "m.stewart@manpower.pro", role: "HR Specialist", contact: "+1 (555) 012-3459", status: "Active" },
];

export default function EmployeeManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Employee Management</h1>
          <p className="text-sm text-muted-foreground">Oversee your workforce, track roles, and manage active personnel.</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          <Users className="h-4 w-4" /> Add Employee
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between">
        <div className="flex rounded-lg border border-border overflow-hidden">
          {["All Employees", "Active", "Inactive"].map((f, i) => (
            <button key={f} className={`px-4 py-2 text-sm font-medium ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <select className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground">
            <option>Role: All Positions</option>
          </select>
          <button className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-muted"><Download className="h-4 w-4" /></button>
          <button className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-muted"><Printer className="h-4 w-4" /></button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {["ID", "NAME", "ROLE", "CONTACT", "STATUS", "ACTIONS"].map((h) => (
                <th key={h} className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="px-5 py-4 text-muted-foreground">{emp.id}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">
                      {emp.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{emp.name}</p>
                      <p className="text-xs text-muted-foreground">{emp.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-muted-foreground">{emp.role}</td>
                <td className="px-5 py-4 text-muted-foreground">{emp.contact}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${emp.status === "Active" ? "text-success" : "text-warning"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${emp.status === "Active" ? "bg-success" : "bg-warning"}`} />
                    {emp.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button className="text-muted-foreground hover:text-foreground"><Pencil className="h-4 w-4" /></button>
                    <button className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-5 py-3 border-t border-border">
          <p className="text-sm text-muted-foreground">Showing 1-4 of 42 employees</p>
          <div className="flex gap-1">
            {[1, 2, 3, "...", 11].map((p, i) => (
              <button key={i} className={`h-8 w-8 rounded-lg text-sm font-medium ${p === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-primary p-5 text-primary-foreground">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/70">Total Headcount</p>
          <p className="mt-1 text-3xl font-bold">1,402</p>
          <p className="mt-2 text-xs text-primary-foreground/80">↗ +12% vs LY</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Average Retention</p>
          <p className="mt-1 text-3xl font-bold text-foreground">94.2%</p>
          <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
            <div className="h-full w-[94%] rounded-full bg-primary" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Industry standard: 82%</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Open Requisitions</p>
          <p className="mt-1 text-3xl font-bold text-foreground">24</p>
          <p className="mt-2 text-xs text-muted-foreground">4 Urgent vacancies</p>
        </div>
      </div>
    </div>
  );
}

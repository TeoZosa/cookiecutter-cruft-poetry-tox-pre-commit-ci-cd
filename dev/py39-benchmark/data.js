window.BENCHMARK_DATA = {
  "lastUpdate": 1623819551291,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "62168372a211e0737d0ec0a9547073905a8ba5d3",
          "message": "Merge pull request #215 from TeoZosa/dependabot/pip/sphinx-4.0.2\n\n⬆️ Bump sphinx from 3.5.4 to 4.0.2",
          "timestamp": "2021-06-16T04:54:19Z",
          "tree_id": "03811b5ebb3badcc2f79c092375c77744a4c4616"
        },
        "date": 1623819549614,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14687.926932815819,
            "unit": "iter/sec",
            "range": "stddev: 0.000020986207502177155",
            "extra": "mean: 68.08312735855164 usec\nrounds: 13089"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4286468.599216641,
            "unit": "iter/sec",
            "range": "stddev: 5.984764638133061e-7",
            "extra": "mean: 233.29227238067892 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12594.069818295282,
            "unit": "iter/sec",
            "range": "stddev: 0.000012698691220885052",
            "extra": "mean: 79.40245007593255 usec\nrounds: 9234"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131757.45662412143,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042616316582908155",
            "extra": "mean: 7.589703274652658 usec\nrounds: 47394"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14614.619938844891,
            "unit": "iter/sec",
            "range": "stddev: 0.00008298029235179636",
            "extra": "mean: 68.4246326065622 usec\nrounds: 9268"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4025892.4277988267,
            "unit": "iter/sec",
            "range": "stddev: 1.9806547461664498e-7",
            "extra": "mean: 248.39213116947442 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}
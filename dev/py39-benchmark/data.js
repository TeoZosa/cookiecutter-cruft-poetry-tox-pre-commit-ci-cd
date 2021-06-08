window.BENCHMARK_DATA = {
  "lastUpdate": 1623173349450,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "e43bf0f081d807f0ec4591c09d9758b7afec3eed",
          "message": ":memo: Fix minimum Python version typo",
          "timestamp": "2021-06-08T17:24:22Z",
          "tree_id": "6296524d854234e0e2d4dbe646baffc7d1b831d5"
        },
        "date": 1623173347835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14829.286720063305,
            "unit": "iter/sec",
            "range": "stddev: 0.00006227837248304655",
            "extra": "mean: 67.43412673025254 usec\nrounds: 13004"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4570772.217192423,
            "unit": "iter/sec",
            "range": "stddev: 2.5641423675120416e-7",
            "extra": "mean: 218.78141208600542 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11805.928529508314,
            "unit": "iter/sec",
            "range": "stddev: 0.0001350836759677996",
            "extra": "mean: 84.7032063171102 usec\nrounds: 6427"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 139026.26693803645,
            "unit": "iter/sec",
            "range": "stddev: 0.000013764443349918981",
            "extra": "mean: 7.19288535917962 usec\nrounds: 51814"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15288.193168839334,
            "unit": "iter/sec",
            "range": "stddev: 0.000055413932533817676",
            "extra": "mean: 65.40995322051644 usec\nrounds: 12078"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4313238.625462409,
            "unit": "iter/sec",
            "range": "stddev: 6.906092336342358e-7",
            "extra": "mean: 231.84434872123876 nsec\nrounds: 161291"
          }
        ]
      }
    ]
  }
}
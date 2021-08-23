window.BENCHMARK_DATA = {
  "lastUpdate": 1629728690938,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "d8ee44146fd3f069ec68df3318ccedf5a4a9c212",
          "message": "Merge pull request #297 from TeoZosa/dependabot/pip/pylint-2.10.2",
          "timestamp": "2021-08-23T13:19:35Z",
          "tree_id": "41e61fa4f7fe9fbdb5a882e20d599d274298cb0b"
        },
        "date": 1629728688778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14716.868048805103,
            "unit": "iter/sec",
            "range": "stddev: 0.00003794570444134905",
            "extra": "mean: 67.94924006138605 usec\nrounds: 5182"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3929304.985816463,
            "unit": "iter/sec",
            "range": "stddev: 3.408617775752948e-7",
            "extra": "mean: 254.49793375919683 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12187.368853422322,
            "unit": "iter/sec",
            "range": "stddev: 0.000051657966239194704",
            "extra": "mean: 82.05216499369271 usec\nrounds: 7073"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 119289.45022540355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000180331365085999",
            "extra": "mean: 8.382970984529214 usec\nrounds: 42736"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14609.157103966008,
            "unit": "iter/sec",
            "range": "stddev: 0.000042079376308088316",
            "extra": "mean: 68.45021878288418 usec\nrounds: 11628"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3992179.439744655,
            "unit": "iter/sec",
            "range": "stddev: 3.5256632518883625e-7",
            "extra": "mean: 250.48974253130933 nsec\nrounds: 52357"
          }
        ]
      }
    ]
  }
}
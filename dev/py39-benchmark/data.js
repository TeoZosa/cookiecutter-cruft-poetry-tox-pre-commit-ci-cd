window.BENCHMARK_DATA = {
  "lastUpdate": 1629310599846,
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
          "id": "fedce25b0d8d8f782f755554218d917645b54d23",
          "message": ":construction_worker: Rename `make` target `build` to `package`\n\n`package` is a better mnemonic due to being both more accurate and\nspecific; while `build` is more commonly used, it's inter-project\nvariance makes it ambiguous and potentially misleading.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-18T18:10:09Z",
          "tree_id": "c821bd34fce6b23d60bd72708a61bb94b852ff42"
        },
        "date": 1629310597436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14213.147619694937,
            "unit": "iter/sec",
            "range": "stddev: 0.00004680720406638577",
            "extra": "mean: 70.35739209619659 usec\nrounds: 1923"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3644180.85181531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012611735425956152",
            "extra": "mean: 274.4100912286469 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11875.966481592439,
            "unit": "iter/sec",
            "range": "stddev: 0.000032952055347924444",
            "extra": "mean: 84.2036731536742 usec\nrounds: 5498"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 106096.06544138653,
            "unit": "iter/sec",
            "range": "stddev: 0.000011555439074073087",
            "extra": "mean: 9.425420215535294 usec\nrounds: 35715"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14336.218087835685,
            "unit": "iter/sec",
            "range": "stddev: 0.00009733331566329625",
            "extra": "mean: 69.75340315508332 usec\nrounds: 12804"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3579641.556864707,
            "unit": "iter/sec",
            "range": "stddev: 4.3612262938511414e-7",
            "extra": "mean: 279.3575792754259 nsec\nrounds: 166667"
          }
        ]
      }
    ]
  }
}